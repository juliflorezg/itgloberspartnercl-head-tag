import React from "react";
import { Helmet } from 'vtex.render-runtime'

// type Props = {
//   name: 'meta'
//   attributes?: {
//     name?: string
//     property?: string
//     content?: string
//     httpEquiv : string
//   }
// } |
// {
//   name: 'title'
//   content: string
// }
// | {
//   name : 'link'
//   attributes?:{
//     rel?: string
//     href?: string
//   }
// }

const HeadTag = () => {
  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, maximum-scale=2, shrink-to-fit=no"/>
      <meta property="og:type" content="article" />
      <title>Falabella Store Theme</title>
      <link rel="icon" sizes="32x32" href="https://www.falabella.com.co/favicon-32x32.png" type="image/png"></link>
      {/* <link rel="icon" sizes="32x32" href="/assets/icons/favicon-32x32.png" type="image/png"></link> */}

    </Helmet>
  )
}

// const MetaTag = (props: Props) => {

//   // return (
//   //   <Helmet>
//   //     <meta name="viewport" content="width=device-width, maximum-scale=2, shrink-to-fit=no"/>
//   //     <meta property="og:type" content="article" />
//   //   </Helmet>
//   // )
//   switch(props.name){
//     case "meta": {
//       return (
//         <Helmet>
//           <meta name={props.attributes?.name || ""} content={props.attributes?.content || ""} property={props.attributes?.property || ""} httpEquiv = {props.attributes?.httpEquiv || ""} />
//         </Helmet>
//       )
//     }
//     case "title": {
//       return (
//         <Helmet>
//           <title>{props.content}</title>
//         </Helmet>
//       )
//     }
//     case "link": {
//       return (
//         <Helmet>
//           <link rel={props.attributes?.rel} href={props.attributes?.href}/>
//         </Helmet>
//       )
//     }
//   }
// }

export default HeadTag

HeadTag.schema = {
  title: "tag for head element",
  type: "object",
  properties: {
    name: {
      title: "tags name",
      type: "string"
    },
    attributes: {
     title: "tag attributes",
     type: "object",
      properties: {
       name: {
       title: "metas name",
       type: "string"
       },
       property: {
         title: "metas property",
         type: "string"
       },
       content: {
         title: "metas content for name",
         type: "string"
       },
       httpEquip: {
         title: "metas http-equiv",
         type: "string"
       },
       rel: {
         title: "links rel",
         type: "string"
       },
       href: {
         title: "links href",
         type: "string"
       },
      }
    },
    content: {
      title: "titles content",
      type: "string"
    }
  }
}
