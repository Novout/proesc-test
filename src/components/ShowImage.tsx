import Image from "next/image"
import { IconWizard } from "./icons/IconWizard"

export const ShowImage = (props: { attributes: { [key: string]: any }}) => {
  return (
    <>
      {props.attributes.cover && <Image 
        width={200}
        height={200}
        alt=""
        src={props.attributes.cover}
      />}
      {props.attributes.image && <Image 
        width={200}
        height={200}
        alt=""
        src={props.attributes.image}
      />}
      {props.attributes.poster && <Image 
        width={200}
        height={200}
        alt=""
        src={props.attributes.poster}
      />}
      {(!props.attributes.cover && !props.attributes.image && !props.attributes.poster) && <IconWizard />}
    </>
  )
}