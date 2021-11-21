import React from "react";
import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import { useMediaPredicate } from "react-media-hook";
import { TextTab, VideoPanel } from ".";
import { useState } from "react";
import { AnimatedButtons, AnimatedIcons } from ".";
import button2 from "../assets/svgs/animatedIcons/two-key.json";
import button2hover from "../assets/svgs/animatedIcons/two-key-hover.json";
import liquidity from "../assets/svgs/animatedIcons/liquidity.json";

const openInNewTab = url => {
	const newWindow = window.open(url, "_blank", "noopener,noreferrer");
	if (newWindow) newWindow.opener = null;
};

const Liquidity = ({ setIframeLoaded }) => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");

	const [isHoverLiquidity, setIsHoverLiquidity] = useState(false);
	const [isHoverButtonTwo, setIsHoverButtonTwo] = useState(false);
	const [isClickedButtonTwo, setIsClickedButtonTwo] = useState(false);

	return (
		<div>
			<div className="flex">
				<div
					className="flex items-center text-gray-100 filter grayscale hover:grayscale-0 brightness-200 mb-5 hover:brightness-100 "
					onMouseEnter={() => {
						setIsHoverButtonTwo(true);
						setIsClickedButtonTwo(false);
					}}
					onMouseLeave={() => {
						setIsHoverButtonTwo(false);
						setIsClickedButtonTwo(false);
					}}
					onClick={() => {
						setIsHoverButtonTwo(!isHoverButtonTwo);
						setIsClickedButtonTwo(!isClickedButtonTwo);
					}}
				>
					<AnimatedButtons
						url={button2}
						urlhover={button2hover}
						id="button2"
						hover={isHoverButtonTwo}
						click={isClickedButtonTwo}
					></AnimatedButtons>
					<span
						className="font-medium text-orange moveLROnHover"
						style={{ fontSize: smallerThan568 ? 20 : 26 }}
					>
						<span>LIQUIDITY</span>
					</span>
				</div>
			</div>
			<div className="flex border-container items-center justify-between mb-20">
				<div
					className="flex border-container mb-5 md:mb-0 items-center justify-between mr-5 rounded-lg px-5 py-5 flex-grow mr-20"
					style={{ backgroundColor: "rgba(28, 153, 101, 0.2)" }}
				>
					<div className="mb-8" style={{ width: "70%" }}>
						<div>
							<VideoPanel setIframeLoaded={setIframeLoaded}></VideoPanel>
						</div>
					</div>
					<div className="flex flex-col items-center h-3/5 md:flex-row gap-x-5 gap-y-0">
						<div className="flex flex-grow text-tab">
							<TextTab
								title="LIQUIDITY AS A SERVICE"
								content="In DeFi 2.0, ACY Finance is trying to build long-term pools of ‘Protocol Owned Liquidity’. The key of this solution is the Flash Arbitrage Revenue. 20% of this revenue will turn into POL for long."
								color="rgba(28,153,101,0.6)"
								subtitle="Protocol Owned Liquidity"
								link="https://test.acy.finance/#/liquidity"
								linkName="Add Now"
							></TextTab>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div
						className="filter hover:brightness-200 mb-5 flex flex-col items-center justify-center animated-button-container"
						onMouseEnter={() => setIsHoverLiquidity(true)}
						onMouseLeave={() => setIsHoverLiquidity(false)}
					>
						<div className="grid place-items-center animated-button">
							<AnimatedIcons
								play={isHoverLiquidity}
								url={liquidity}
								id="liquidity"
							></AnimatedIcons>
						</div>
						<span
							className="px-5 py-2 text-ms border-solid border-1 border border-gray-500 rounded-3xl text-white cursor-pointer"
							style={{
								width: "105px",
								textAlign: "center",
							}}
							onClick={() => {
								openInNewTab("https://test.acy.finance/#/liquidity");
							}}
						>
							Liquidity Now
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Liquidity;
