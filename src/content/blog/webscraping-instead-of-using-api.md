---
author: Edward Deaver
pubDatetime: 2020-11-07T00:00:00.0Z
modDatetime: 2020-11-07T00:00:00.0Z
title: Using Web Scraping Instead of the API
slug: using-web-scraping-instead-of-api
featured: false
draft: false
ogImage: ../../assets/images/Selenium_Logo.png
tags:
  - api
  - webscraping
  - Selenium
description:
  For my latest project I wanted to create a chat bot that took in color commands from both YouTube and Twitch. Making a Twitch chat bot is incredibly easy from good documentation, and bot registration to using a websocket/IRC connection for the bot instead of HTTP polling. YouTube makes it very hard to create a real time chat bot.
---


For my latest project I wanted to create a chat bot that took in color commands from both YouTube and Twitch. Making a Twitch chat bot is incredibly easy from good documentation, and bot registration to using a websocket/IRC connection for the bot instead of HTTP polling. YouTube makes it very hard to create a real time chat bot.

Note: for this post I am going to be using 1≤ as real time information, and anything above that not real time nor near-real-time.

This post will be covering:

What makes the YouTube API difficult? Creating a Selenium based webscrapper and its challenges. So what makes the YouTube API difficult? The API uses polling for live chat messages. (Even Facebook provides a stream of data for their live comment data) The usage quota. How do you get around these limitations?

The polling Polling is the process of querying an API Endpoint (Ex. mysite.com/CurrentDiamondPrice) a number of times per Y in order to get new information, but with the assumption that it will not be in realtime. This practice is fine for getting subscriber counts or a channel name, but when we deal with real time data like a chatroom that could have 100 new messages a second this fails to work.
Before we get started: YouTube will not support websockets according to u/marcchambers https://www.reddit.com/r/youtubegaming/comments/4kibiw/api_reading_live_chat_messages_from_javascript/d3gina7/

YouTube is the only major streaming platform that has not implemented some type of streaming network interface. Twitch, Facebook and Mixer have (had in the case of Mixer).

The Quota. Every action taken with the YouTube API costs something, and these are charged to your quota amount (note using the API is free).

The current quota (July-2020) is 10,000 units.

Post-April 2016:the quota was 1 Million.

In 2015:the quota was 50 Million.

Because in order to get new information from the API we have to poll it, we have to resort to an inefficient way of getting new information. It is entirely possible that we could hit the API and get no new information but have burned a credit.

So let’s assume you want to make a chatbot that just reads chats, so 1 call to the API costs 1 credit. Let us also assume this chat bot wants to operate in nearly real time so let’s say 1 second between calls ( for the purposes of this bot I will use 1 second as realtime, if this was a graphical application real time would be ~16ms).

So if we were to make 1 call a second that means that we would burn through our API quota in 2.7 hours. This is longer than a majority of streams but what if you are doing a 24 hour stream? How quickly could your bot update if it has to run for 24 hours?

24 hours in seconds is 86,400 seconds.

We have a cap of 10,000 hits.

So, 86,400 / 10,000 = 8.64 seconds per API call.

Some of the issues arising from this are you now need to do data processing on 8 seconds worth of messages which, due to the polling nature of our call, is going to be of an unknown amount. If this were a socket we could do on-demand processing for a message. Also when we process a message that is not the last message in our list the time the color associated is on the LEDs will be cut short because we are looping through a dataset instead of waiting ~1 second per new command. That message color could be on the lights for ~100ms.

Creating a Selenium based web scraper and it’s challenges. Ok, here is the fun part of this post.

First we need to isolate the chat, which can be done using the pop-out window URL for YouTube chat.

Then we need to get the chat messages from the chat using the CSS Selector for the class “yt-live-chat-text-message-renderer”.

Traditionally, the tutorials I’ve read up to this point deal with chat data by just getting querying the chat messages and overwriting it when it’s displayed on a screen. My implementation works like a websocket would. From this we have a snapshot of the messages (remember that the chat box is still filling up at this time). So in order to make a usable scraper that will be able to handle new messages coming in we have to store length of variables and splice our chat messages from the CSS selector so:

Get the chat data and tell our get chat function to return messages with a start point of 0 startData = pointChatData(0) #START POINT Data This data returned is an array of [len(chatData),chatData] Now store the start point we will use in the next calls. The program needs to do this so that the subsequent loops know where to start: startPoint = startData[0] #Start point is set to the length of StartData Enter a while loop that doesn’t end: 

while(True): 
Get the chat data and tell our get chat function to return messages with a start point of startPoint startData = pointChatData(startPoint) #START POINT Data 

Now to store the start point we will use in the next calls. The program needs to do this so that the subsequent loops know where to start: startPoint = startData[0] 

#Start point is set to the length of StartData

Now, comes the part of dealing with a dynamic data structure you don’t control. YouTube stores the chat data in a stack and once the stack hits ~248 data points the first messages start to be removed from the stack. Now let’s get the lastIndexPosition of our chatset: lastIndexPosition = len(startData[1])-1.

Now let’s get the last message sent in that message data set. lastMessage = startData[1][len(startData[1])-1] 

Now, let’s get the position of the last message sent in the new chat message dataset and set that index position as the start point. startPoint = getNewestPosition(lastMessage, startData[1]) At this point the message length should be sub 248 and it will go back to A then to B till it hits above 248 and do it again. This solution isn’t perfect by any means. All of this has the overhead performance cost of running a separate installation of Chrome web browser, but it works.
