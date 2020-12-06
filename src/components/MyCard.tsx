import React from "react";

export interface Props {
  backgroundColor?: string
  title?: string
  description?: string
  showButton?: boolean
  btn_url: string
  btn_color: "btn-primary" | "btn-success" | "btn-danger" | "btn-warning" | "btn-info"
  btn_text?: string
  btn_onClick?: (str: string) => void
}

const MyCard = (props: Props) => {
  return (
    <div className="card" style={{width: "18rem", backgroundColor: props?.backgroundColor}}>
      <div className="card-body">
        <h5 className="card-title">{props?.title}</h5>
        <p className="card-text">{props?.description}</p>
        {props?.showButton && (
          <a href={props?.btn_url}
            onClick={(e: React.SyntheticEvent) => {
              e.stopPropagation()
              e.preventDefault()
              props?.btn_onClick?.("Hello World")
            }}
            className={`btn ${props?.btn_color || "btn-primary"}`}
          >{props?.btn_text}</a>
        )}
      </div>
    </div>
  )
}
export default MyCard
