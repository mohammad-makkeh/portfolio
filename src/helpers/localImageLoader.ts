import { ImageLoader } from "next/image";

const localImageLoader:ImageLoader = function (props) {
    return `/img/${props.src}?w=${props.width}&q=${props.quality || 75}`;
}

export default localImageLoader;