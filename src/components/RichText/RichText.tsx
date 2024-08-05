import React, { Children } from "react"
import {
    ContentfulRichTextGatsbyReference,
    renderRichText,
    RenderRichTextData,
} from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { Options } from "@contentful/rich-text-react-renderer"
import { Bold, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Text } from "./Markdown"
import { GatsbyImage } from "gatsby-plugin-image"


type BlogBodyProps = {
    content: RenderRichTextData<ContentfulRichTextGatsbyReference>
}


export const RichText = ({ content }: BlogBodyProps) => {
    // console.log("target.name",target.name);


    const options: Options = {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
            [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
            [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
            [BLOCKS.HEADING_4]: (node, children) => <Heading4>{children}</Heading4>,
            [BLOCKS.HEADING_5]: (node, children) => <Heading5>{children}</Heading5>,
            [BLOCKS.HEADING_6]: (node, children) => <Heading6>{children}</Heading6>,
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [INLINES.ENTRY_HYPERLINK]: (node, children) => {
                const { uri } = node.data
                return <a
                    href={uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link opens in a new window"
                    title="Link opens in a new window"
                >{children} </a>
            },
            [BLOCKS.EMBEDDED_ASSET]: ({ data: { target } }, children) => {
                return 
                    <GatsbyImage
                        image={target.gatsbyImageData}
                        alt={target && target.title}
                         loading='lazy'
                    />
            },
            [BLOCKS.EMBEDDED_ENTRY]: ({ data: { target } }, children) => {
                // console.log("data",target);
                if (!target) return <></>
                switch (target.__typename) {
                    case "ContentfulComponentLink":
                        return <div className="rich-text-component" id="rich-text-link">
                            <RichTextLink slug={target.slug} title={target.title} />
                        </div>
                    case "ContentfulSectionGrid":
                        return <>
                            <RichTextGrid data={target} />
                        </>
                    default:
                        return <></>
                }
            }
        },
    }


    return content ? (
        // <div></div>
        <div className="blog-body">{renderRichText(content, options)}</div>
    ) : null
}
