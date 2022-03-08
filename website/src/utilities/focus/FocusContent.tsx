import { Button } from "@mui/material"
import { PropsWithChildren, useCallback } from "react"

import './FocusContentStyles.css'

type SkipFocusToProps = PropsWithChildren<{
  targetElementId: string,
}>


export const SkipFocusToElement = (props: SkipFocusToProps) => {

  const focusCallback = useCallback(() => {
    
    const targetElement = document.getElementById(props.targetElementId)
    if (targetElement === null)
      return
    
      targetElement.focus()

  }, [props.targetElementId])

  return (<Button data-skip-nav-link onClick={focusCallback}>
    {props.children || "Skip to Content"}
  </Button>)
}

export const SkipFocusToAnchor = (props: SkipFocusToProps) => {
  
  const focusCallback = useCallback(() => {
    const targetElement = document.getElementById(props.targetElementId)
    if (targetElement === null)
      return

    const firstLink = targetElement.querySelector('a')
    if (firstLink)
      firstLink.focus()
    
  }, [props.targetElementId])

  return (<Button data-skip-nav-link onClick={focusCallback}>
    {props.children || "Skip to Content"}
  </Button>)

}
