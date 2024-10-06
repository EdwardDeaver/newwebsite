import { slugifyStr } from "@utils/slugify";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"portfolio">["data"];
  secHeading?: boolean;

}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  console.log("href");
  console.log(href);
  const { title, tags, description, ogImage } = frontmatter;
console.log(typeof ogImage);
let myVarIsObject = false;


  if(typeof ogImage == 'object'){
    myVarIsObject = true;
  }
  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">

      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        
 

        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}

{ myVarIsObject ? (<img 
        src={ogImage.src!}
        alt={description}/>
        ) : ''} 
      </a>
      <ul className="flex space-x-3"> 
        {tags.map((item) => (
          <li><a href={`/tags/${item}`} >{item}</a></li>
        ))}
      </ul>
      <p>{description}</p>
    </li>
  );
}
