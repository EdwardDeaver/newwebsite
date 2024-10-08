import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import Tag from "@components/Tag.astro";

export interface Props {
  href?: string;
  frontmatter: object;
  secHeading?: boolean;
  dateShow: boolean;
  displayTags: boolean;
  displayImage: boolean;
}

export default function Card({ href, displayImage= false, frontmatter, dateShow, displayTags, secHeading = true }: Props) {
  const { title, tags, ogImage, pubDatetime, modDatetime, description } = frontmatter;
  let myVarIsObject = false;
  

  if(typeof ogImage == 'object'){
    myVarIsObject = true;
  }

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6 card bg-base-100 w-full">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
          <figure>

        { (myVarIsObject && displayImage) ? (<img 
        src={ogImage.src!}
        alt={description} />
        ) : ''} 
        </figure>
      </a>
      {dateShow ? (<Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />) : ''}
      <div className="flex space-x-2"> 
      { 
      tags.map((object, i) => <a href={'/tags/'+object}><span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset " key={i}> {object} </span> </a>)
      }
      </div>
      <p>{description}</p>
    </li>
  );
}
