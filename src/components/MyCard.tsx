import React from "react";

export interface ButtonProps {
  url: string
  color: "btn-primary" | "btn-success" | "btn-danger" | "btn-warning" | "btn-info"
  text?: string
  onClick?: (str: string) => void
}

interface Props {
  backgroundColor?: string
  title?: string
  description?: string
  showButton?: boolean
  btn?: ButtonProps
}

const MyCard = (props: Props) => {
  return (
    <div className="card" style={{width: "18rem", backgroundColor: props?.backgroundColor}}>
      <div className="card-body">
        <h5 className="card-title">{props?.title}</h5>
        <p className="card-text">{props?.description}</p>
        {props?.showButton && (
          <a href={props?.btn?.url}
            onClick={(e: React.SyntheticEvent) => {
              e.stopPropagation()
              e.preventDefault()
              props?.btn?.onClick?.("Hello World")
            }}
            className={`btn ${props?.btn?.color || "btn-primary"}`}
          >{props?.btn?.text}</a>
        )}
      </div>
    </div>
  )
}
export default MyCard
