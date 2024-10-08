---
author: Edward Deaver
pubDatetime: 2024-01-04T09:30:41.816Z
title: EmpoweredAR
slug: "empoweredar-mit-reality-hack-2024"
featured: true
ogImage: ../../assets/images/logo.jpg
tags:
  - AR
  - MIT Reality Hack
  - Unity
description: "AstroPaper v4: ensuring a smoother and more feature-rich blogging experience."
---

EmpoweredAR leverages the ability of Xreal eyewear to generate meshes of the physical environment and combined with accurate and reliable distance tracking, can provide wearers with an auditory map.

<iframe title="vimeo-player" src="https://player.vimeo.com/video/907226882?h=22a3f6bea3" class=" w-full aspect-video" frameborder="0"    allowfullscreen></iframe>

### Inspiration

We wanted to tackle something that revolved around accessibility and how AR technology could be more than just entertainment or educational. One of the mentors at the hack is visually impaired, and motivated us to pursue a solution for him and others like him.

### What it does

Using the Xreal lenses that generate a digital mesh, we established that we could provide the user with an auditory ping. This gives them information about distance to objects and the space around them. Not only are wearers able to build a larger spatial map, but they can safely navigate around obstacles in their path.

### How we built it
We utilized Unity audio for the audio playback, TensorFlow and YOLOV3 for object detection, and the XREAL glasses depth data for a mesh and raycasting to determine object distance.

### Challenges we ran into

The XREAL lenses do not have an RGB camera, and therefore, we cannot differentiate between obstacles or a wall that they use to walk through spaces.

Working on the same project in git with Unity posed issues when merging and required careful pruning of files.

Accomplishments that we're proud of
Getting object detection working when user moves head.

### What we learned

XREAL development TensorFlow/YOLOv3 in Unity Spatial Audio in Unity

### What's next for EmpoweredAR

Implement object detection with AI support and voice audio so that users can complete tasks such as locate a handrail and safely navigate down a set of stairs. Our current build is optimal only for indoor spaces, and would have difficulty navigating open areas or dynamic objects in space.

### Project Abstract

EmpoweredAR leverages the ability of Xreal eyewear to generate meshes of the physical environment and combined with accurate and reliable distance tracking, can provide wearers with an auditory map.

### Code Repository

https://codeberg.org/reality-hack-2024/TABLE_72

### Purpose

The general population’s current perspective of VR and AR products is that they are for education or entertainment purposes, but we wanted to set out to demonstrate that they could be utilized to better connect people to their environment.

Our concept, EmpoweredAR, intends to help the visually impaired navigate the spaces they inhabit, and allow them to gain back the confidence to explore their world.

### How we do it

EmpoweredAR leverages the ability of Xreal eyewear to generate meshes of the physical environment and combined with accurate and reliable distance tracking, can provide wearers with an auditory map. As they approach an object that they may collide with, a tone is created and the intervals between the tones are shortened relative to their distance from the object, giving them very explicit information about the space. Although we focused on collision avoidance, we quickly realized that this helped to illuminate clear spaces; distinguishing the two can help users generate a mental image of their space.

### Limitations

Because the Xreal Air 2 Ultra eyewear did not have internal RGB cameras, we did not have object identification, and could therefore not guide users to objects that they did not want to avoid, such as handrails on stairs, or towards a water fountain to refill their bottle. We understood that with further development and hardware advances, this would be a clear next step of design. We considered also leveraging AI for this task, and could shorten our development time significantly.

### Key takeaways

As our team learned to work together and wanted to put our best foot forward, we leveraged our strengths to tackle a problem that we had no prior knowledge of.

Edward learned native Unity sound design/scripting this year, vs CSound last year, and also some basic sound design to complete our project. He mainly has experience with web development/Arduino.

Hakan had experience developing ML models before however, it was his first time using Unity for running AI models. He managed to train/deploy an object detection model for this project.

### Technology Stack:

Hardware: XReal 2 Ultra Software: Unity / Unity Audio Tooling Steam Audio GarageBand (Steinway Grand Piano) Audacity YOLOv3 Tensorflow Adobe Premier/After Effects

### Team Members:

Albert Zhou Albert is a Junior at the University of Missouri studying Information Technology. His research is focused on the impact that VR has on education and mental health. In his spare time, he enjoys working with servers and computer networking.

Lorraine Cruz Lorraine is a Designer & Critical Theorist based in NYC. They’re currently pursuing a Masters in Design & Technology at Parsons School of Design. Their research centers decolonial theory and seeks to reimagine social systems.

Edward Deaver, IV Edward is a creative technologist from Syracuse, NY. This is his 2nd Reality Hack. He has a computer science Bachelor’s degree from Le Moyne College.

Hakan Otal Hakan is a researcher from Albany, NY. He is currently pursuing PhD at SUNY Albany. His research focuses on graph neural networks and network security.

Larry Chan

Thank you so much to the mentors and sponsors for whom this project would not have been possible:
Patrick from BenVision Chris McNally Gregory Osborne Shirly Spikes Wei at XREAL

Built With:

* adobeaftereffects
* adobeillustrator
* garageband
* steamaudio
* tensorflow
* unity
* yolov3
