import Image from "next/image";
import "./styles.css";
import YellowStar from "./pieces/yellow-star";

export interface IProject100PageProps {}

export default function Project100Page(props: IProject100PageProps) {
    return (
        <div className="root flex items-center justify-center w-screen h-screen overflow-hidden">
            <div className="bill-root">
                <div className="left-rim">
                    <Image
                        alt="decoration"
                        src={"/img/project-100/left-rim.svg"}
                        className="object-cover"
                        fill
                    />
                </div>

                {/* top left corner */}
                <div className="block top-left-corner">
                    <Image
                        alt="decoration"
                        src={"/img/project-100/block-pattern-rhombus.svg"}
                        className="object-cover"
                        fill
                    />
                    <YellowStar className={"top-left-corner-yellow-star-1"} />
                    <YellowStar className={"top-left-corner-yellow-star-2"} />
                    <div className="top-left-100">
                        <Image
                            alt="decoration"
                            src={"/img/project-100/top-left-100.png"}
                            className="object-cover"
                            fill
                        />
                    </div>
                </div>

                {/* top center bar */}
                <div className="top-center-bar">
                    <Image
                        alt="decoration"
                        src={"/img/project-100/top-center-bar.svg"}
                        className="object-cover"
                        fill
                    />
                </div>
                {/* text bank name */}
                <div className="text-bank-name">
                    <Image
                        alt="decoration"
                        src={"/img/project-100/text-bank-name.svg"}
                        className="object-cover"
                        fill
                    />
                </div>


                {/* top right corner */}
                <div className="block top-right-corner">
                    <Image
                        alt="decoration"
                        src={"/img/project-100/block-pattern-rhombus.svg"}
                        className="object-cover"
                        fill
                    />
                </div>

                <div className="right-rim">
                    <Image
                        alt="decoration"
                        src={"/img/project-100/right-rim.svg"}
                        className="object-cover"
                        fill
                    />
                </div>
            </div>
        </div>
    );
}
