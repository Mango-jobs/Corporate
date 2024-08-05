import React from "react"


type NodeProps = {
    children: React.ReactNode
}


export const Bold = ({ children }: NodeProps) => <strong className="rich-text-b">{children}</strong>


export const Text = ({ children }: NodeProps) => (
    <p className="rich-text-p">{children}</p>
)
export const Heading1 = ({ children }: NodeProps) => (
    <h1 className="heading heading-1">{children}</h1>
)
export const Heading2 = ({ children }: NodeProps) => (
    <h2 className="heading heading-2">{children}</h2>
)
export const Heading3 = ({ children }: NodeProps) => (
    <h3 className="heading heading-3">{children}</h3>
)
export const Heading4 = ({ children }: NodeProps) => (
    <h4 className="heading heading-4">{children}</h4>
)
export const Heading5 = ({ children }: NodeProps) => (
    <h5 className="heading heading-5">{children}</h5>
)
export const Heading6 = ({ children }: NodeProps) => (
    <h6 className="heading heading-6">{children}</h6>
)
