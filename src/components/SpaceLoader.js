import { gsap } from "gsap";
import "./SpaceLoader.css";


const SpaceLoader = () => {
	gsap.fromTo(
		".fire",
		0.03,
		{
			x: -0.5,
			y: -0.4,
		},
		{
			x: 0.5,
			y: 0.4,
			repeat: -1,
			yoyo: true,
		}
	);
	const tl = new gsap.timeline({
		repeat: -1,
	});
	const tl_sky = new gsap.timeline({
		repeat: -1,
	});
	const planetsTiming = 4;
	const meteorTiming = 2;
	const planetPos = {
		from: "-30vh",
		to: "130vh",
		ease: "none",
	};
	tl_sky.fromTo(
		".Starbg",
		12,
		{
			transform: "translateY(-100vh)",
		},
		{
			transform: "translateY(0)",
			ease: "none",
		}
	);
	tl.to(
		".rocket",
		2,
		{
			transform: "translateY(-3vh)",
			ease: "expo.out",
		},
		"+=1.5"
	) //INSERT ROCKET
		.fromTo(
			".meteor",
			meteorTiming,
			{
				transform: "translate3d(-50px,-50px,0)",
			},
			{
				transform: "translate3d(-120vw,80vh,0)",
				ease: "none",
			}
		)
		.fromTo(
			".meteor",
			meteorTiming,
			{
				transform: "translate3d(-50px,-50px,0)",
			},
			{
				transform: "translate3d(-120vw,80vh,0)",
				ease: planetPos.ease,
			},
			"-=2"
		)
		.fromTo(
			".fire",
			0.4,
			{
				scaleY: 0.7,
			},
			{
				scaleY: 1.5,
			}
		) //SCALE THE FLAMES
		.add(() => tl_sky.timeScale(25), "-=.4") //SPEED UP THE SKY
		.to(
			".rocket",
			2,
			{
				transform: "translateY(-130vh)",
				ease: "power3.out",
			},
			"+=1"
		) //HIDE THE Rocket
		.fromTo(
			".text",
			0.8,
			{
				opacity: 0,
				transform: "translateY(100px)",
			},
			{
				opacity: 1,
				transform: "translateY(0)",
			},
			"-=1.8"
		)
		.to(
			".text",
			0.8,
			{
				opacity: 0,
				transform: "translateY(-100px)",
			},
			"+=1"
		)
		.add(
			() =>
				gsap.to(tl_sky, 1.5, {
					timeScale: 2,
				}),
			"+=.5"
		); //RETURN SKY TO THE ORIGINAL SPEED

	tl_sky.timeScale(1);

	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-col items-center justify-between px-5 py-5">
				<div className="Spacehtml">
					<div className="Spacebody">
						<div className="SpaceBar">
							{/* <div class="sky">
    <div class="sky-bg"></div>
    <div class="sky-bg"></div>
  </div> */}
							<div className="Starbg">
								<div id="stars"></div>
								<div id="stars2"></div>
								<div id="stars3"></div>
							</div>
							<img
								class="meteor"
								src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/830072/meteor.svg"
							/>
							<svg
								class="rocket"
								version="1.1"
								id="Layer_1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								viewBox="0 0 79 248"
								enable-background="new 0 0 79 248"
								xmlSpace="preserve"
							>
								<g class="fire">
									<linearGradient
										id="fire-5_3_"
										gradientUnits="userSpaceOnUse"
										x1="22.5046"
										y1="153.1758"
										x2="22.5047"
										y2="189.7509"
									>
										<stop offset="0" style={{ color: "#F37121" }} />
										<stop offset="1" style={{ color: "#E34E27" }} />
									</linearGradient>
									<path
										class="fire-5"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="url(#fire-5_3_)"
										d="M25.9,143.2c6.2,20.8,2.7,34.5-3.5,48.4
    c-5.9-12.8-8.9-27.2-4.1-48.4C19.2,139.4,24.8,139.8,25.9,143.2z"
									/>
									<path
										class="fire-4"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#F9A31A"
										d="M24.7,142.8c4.6,12.5,1.4,18.4-2.4,26.8
    c-0.1,0.1-0.2,0.2-0.4,0.2c-0.2,0-0.4-0.1-0.4-0.2c-3.5-7.9-5.5-15.1-2.3-26.7C20,140.2,23.9,140.6,24.7,142.8z"
									/>
									<path
										class="fire-3"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#FAD06D"
										d="M23.8,142.5c2.6,6,1.2,10.2-1.3,14.4
    c-0.1,0.2-0.3,0.3-0.6,0.3c-0.3,0-0.5-0.1-0.6-0.3c-2.3-3.8-2.7-9.3-0.8-14.4C21,141.1,23.2,141.3,23.8,142.5z"
									/>
									<path
										class="fire-2"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#FAE6B2"
										d="M23.2,142.5c1.3,3.6,0.6,6.1-0.6,9.1
    c-0.1,0.1-0.2,0.2-0.5,0.2c-0.2,0-0.4-0.1-0.5-0.2c-1.1-2.9-1.8-5.6-0.6-9.2C21.4,141.3,22.8,141.6,23.2,142.5z"
									/>
									<path
										class="fire-1"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#FFFFFF"
										d="M22.7,142.9c0.6,1.8,0.3,3.1-0.3,4.6
    c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.2,0-0.2-0.1c-0.6-1.4-0.9-2.8-0.3-4.6C21.7,142.3,22.5,142.5,22.7,142.9z"
									/>
								</g>
								<g class="fire">
									<linearGradient
										id="fire-5_4_"
										gradientUnits="userSpaceOnUse"
										x1="58.1015"
										y1="153.1758"
										x2="58.1016"
										y2="189.7509"
									>
										<stop offset="0" style={{ color: "#F37121" }} />
										<stop offset="1" style={{ color: "#E34E27" }} />
									</linearGradient>
									<path
										class="fire-5"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="url(#fire-5_4_)"
										d="M61.5,143.2c6.2,20.8,2.7,34.5-3.5,48.4
    c-5.9-12.8-8.9-27.2-4.1-48.4C54.8,139.4,60.4,139.8,61.5,143.2z"
									/>
									<path
										class="fire-4"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#F9A31A"
										d="M60.3,142.8c4.6,12.5,1.4,18.4-2.4,26.8
    c-0.1,0.1-0.2,0.2-0.4,0.2c-0.2,0-0.4-0.1-0.4-0.2c-3.5-7.9-5.5-15.1-2.3-26.7C55.6,140.2,59.5,140.6,60.3,142.8z"
									/>
									<path
										class="fire-3"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#FAD06D"
										d="M59.4,142.5c2.6,6,1.2,10.2-1.3,14.4
    c-0.1,0.2-0.3,0.3-0.6,0.3c-0.3,0-0.5-0.1-0.6-0.3c-2.3-3.8-2.7-9.3-0.8-14.4C56.6,141.1,58.8,141.3,59.4,142.5z"
									/>
									<path
										class="fire-2"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#FAE6B2"
										d="M58.8,142.5c1.3,3.6,0.6,6.1-0.6,9.1
    c-0.1,0.1-0.2,0.2-0.5,0.2c-0.2,0-0.4-0.1-0.5-0.2c-1.1-2.9-1.8-5.6-0.6-9.2C57,141.3,58.4,141.6,58.8,142.5z"
									/>
									<path
										class="fire-1"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#FFFFFF"
										d="M58.2,142.9c0.6,1.8,0.3,3.1-0.3,4.6
    c0,0.1-0.1,0.1-0.2,0.1s-0.2,0-0.2-0.1c-0.6-1.4-0.9-2.8-0.3-4.6C57.3,142.3,58.1,142.5,58.2,142.9z"
									/>
								</g>
								<g class="fire">
									<linearGradient
										id="fire-5_5_"
										gradientUnits="userSpaceOnUse"
										x1="40.1556"
										y1="154.07"
										x2="40.1557"
										y2="208.7984"
									>
										<stop offset="0" style={{ color: "#F37121" }} />
										<stop offset="1" style={{ color: "#E34E27" }} />
									</linearGradient>
									<path
										class="fire-5"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="url(#fire-5_5_)"
										d="M43.8,139.2c6.7,31.2,2.9,51.6-3.8,72.4
    c-6.4-19.2-9.6-40.7-4.4-72.4C36.5,133.5,42.7,134,43.8,139.2z"
									/>
									<path
										class="fire-4"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#F9A31A"
										d="M42.6,138.5c5,18.8,1.5,27.6-2.5,40.2
    c-0.1,0.2-0.2,0.3-0.4,0.3c-0.2,0-0.4-0.1-0.4-0.3c-3.8-11.8-5.9-22.5-2.5-40C37.4,134.6,41.7,135.2,42.6,138.5z"
									/>
									<path
										class="fire-3"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#FAD06D"
										d="M41.5,138.1c2.8,8.9,1.3,15.3-1.4,21.5
    c-0.1,0.2-0.4,0.4-0.6,0.4c-0.3,0-0.5-0.1-0.6-0.4c-2.5-5.6-2.9-14-0.9-21.5C38.5,136,41,136.3,41.5,138.1z"
									/>
									<path
										class="fire-2"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#FAE6B2"
										d="M40.9,138.1c1.4,5.4,0.7,9.1-0.7,13.6
    c-0.1,0.2-0.3,0.4-0.5,0.4c-0.2,0-0.4-0.1-0.5-0.4c-1.2-4.3-1.9-8.4-0.6-13.8C38.9,136.3,40.5,136.7,40.9,138.1z"
									/>
									<path
										class="fire-1"
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#FFFFFF"
										d="M40.3,138.7c0.7,2.7,0.3,4.6-0.3,6.9
    c0,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2-0.1-0.3-0.2c-0.6-2.1-1-4.3-0.3-6.9C39.3,137.8,40.1,138,40.3,138.7z"
									/>
								</g>
								<g>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#838587"
										d="M18.2,77.2c0.8-1.3,1.8-2.4,3-3.3v0c0.3-0.2,0.7-0.3,1.1-0.3
    c0.4,0,0.7,0.1,1.1,0.3c1.1,0.8,2.2,2,3,3.3c0.7,1.2,1.2,2.5,1.2,3.7v52.3c0,0.4-0.2,0.7-0.4,1c-0.3,0.3-0.6,0.4-1,0.4h-7.6
    c-0.4,0-0.7-0.2-1-0.4c-0.3-0.3-0.4-0.6-0.4-1V80.9C17,79.7,17.5,78.4,18.2,77.2L18.2,77.2z M19.3,135.3h5.8
    c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.4,0.4,0.5,0.7l1.2,3.4H16.8l1.2-3.4c0.1-0.3,0.3-0.5,0.5-0.7C18.7,135.4,19,135.3,19.3,135.3z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#BCBEC0"
										d="M21.5,74.3c-2.1,1.5-3.9,4.2-3.9,6.5v52.3c0,0.5,0.4,0.9,0.9,0.9
    H26c0.5,0,0.9-0.4,0.9-0.9V80.9c0-2.3-1.9-5-3.9-6.5C22.5,74,21.9,74,21.5,74.3L21.5,74.3z M19.3,135.8h5.8c0.4,0,0.7,0.2,0.8,0.6
    l0.9,2.7h-9.4l0.9-2.7C18.6,136,18.9,135.8,19.3,135.8z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#959799"
										d="M19.4,136.4h1.7l-0.7,2.2h-1.9l0.6-2
    C19.2,136.5,19.3,136.4,19.4,136.4L19.4,136.4z M18.2,80.9V133c0,0.1,0.1,0.3,0.3,0.3h2.3c0.1,0,0.3-0.1,0.3-0.3V80.9
    c0-0.7-0.6-1.5-1.2-1.9c-0.1-0.1-0.3-0.1-0.4,0C18.8,79.4,18.2,80.2,18.2,80.9z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#E5E6E7"
										d="M25,80.9V133c0,0.1,0,0.3,0.1,0.3h0.8c0.1,0,0.1-0.1,0.1-0.3
    V80.9c0-0.7-0.2-0.9-0.4-1.4c0-0.1-0.1-0.1-0.2,0C25.2,79.9,25,80.2,25,80.9L25,80.9z M25.1,136.4h-0.8l0.7,2.2h1l-0.6-2
    C25.3,136.5,25.2,136.4,25.1,136.4z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#838587"
										d="M26.9,91h-9.4v0.5h9.4V91L26.9,91z M26.9,120.8h-9.4v0.5h9.4
    V120.8L26.9,120.8z M26.9,105.9h-9.4v0.5h9.4V105.9z"
									/>
								</g>
								<g>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#838587"
										d="M26.3,77.2c0.7,1.2,1.2,2.5,1.2,3.7v52.3c0,0.4-0.2,0.7-0.4,1
    c-0.3,0.3-0.6,0.4-1,0.4h-7.6c-0.4,0-0.7-0.2-1-0.4c-0.3-0.3-0.4-0.6-0.4-1V80.9c0-1.2,0.5-2.5,1.2-3.7c0.8-1.3,1.9-2.5,3-3.3
    c0.3-0.2,0.7-0.3,1.1-0.3c0.4,0,0.7,0.1,1.1,0.3v0C24.4,74.8,25.5,75.9,26.3,77.2L26.3,77.2z M26,135.5c0.2,0.2,0.4,0.4,0.5,0.7
    l1.2,3.4H16.8l1.2-3.4c0.1-0.3,0.3-0.5,0.5-0.7c0.2-0.2,0.5-0.3,0.8-0.3h5.8C25.4,135.3,25.7,135.4,26,135.5z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#BCBEC0"
										d="M23,74.3c-0.4-0.3-1-0.3-1.5,0c-2.1,1.5-3.9,4.2-3.9,6.5v52.3
    c0,0.5,0.4,0.9,0.9,0.9H26c0.5,0,0.9-0.4,0.9-0.9V80.9C26.9,78.6,25.1,75.9,23,74.3L23,74.3z M26,136.4l0.9,2.7h-9.4l0.9-2.7
    c0.1-0.4,0.4-0.6,0.8-0.6h5.8C25.5,135.8,25.8,136,26,136.4z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#959799"
										d="M25.1,136.4c0.1,0,0.2,0.1,0.3,0.2l0.6,2H24l-0.7-2.2H25.1
    L25.1,136.4z M25,78.9c-0.1-0.1-0.3-0.1-0.4,0c-0.6,0.5-1.2,1.3-1.2,1.9V133c0,0.1,0.1,0.3,0.3,0.3h2.3c0.1,0,0.3-0.1,0.3-0.3
    V80.9C26.2,80.2,25.6,79.4,25,78.9z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#E5E6E7"
										d="M19.4,80.9c0-0.7-0.2-0.9-0.4-1.4c0-0.1-0.1-0.1-0.2,0
    c-0.2,0.5-0.4,0.7-0.4,1.4V133c0,0.1,0,0.3,0.1,0.3h0.8c0.1,0,0.1-0.1,0.1-0.3V80.9L19.4,80.9z M19.1,136.6l-0.6,2h1l0.7-2.2h-0.8
    C19.2,136.4,19.1,136.5,19.1,136.6z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#838587"
										d="M17.5,91v0.5h9.4V91H17.5L17.5,91z M17.5,120.8v0.5h9.4v-0.5
    H17.5L17.5,120.8z M17.5,106.4h9.4v-0.5h-9.4V106.4z"
									/>
								</g>
								<g>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#838587"
										d="M53.3,77.2c0.8-1.3,1.8-2.4,3-3.3v0c0.3-0.2,0.7-0.3,1.1-0.3
    c0.4,0,0.7,0.1,1.1,0.3c1.1,0.8,2.2,2,3,3.3c0.7,1.2,1.2,2.5,1.2,3.7v52.3c0,0.4-0.2,0.7-0.4,1c-0.3,0.3-0.6,0.4-1,0.4h-7.6
    c-0.4,0-0.7-0.2-1-0.4c-0.3-0.3-0.4-0.6-0.4-1V80.9C52.1,79.7,52.6,78.4,53.3,77.2L53.3,77.2z M54.4,135.3h5.8
    c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.4,0.4,0.5,0.7l1.2,3.4H51.9l1.2-3.4c0.1-0.3,0.3-0.5,0.5-0.7C53.8,135.4,54.1,135.3,54.4,135.3z
    "
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#BCBEC0"
										d="M56.6,74.3c-2.1,1.5-3.9,4.2-3.9,6.5v52.3c0,0.5,0.4,0.9,0.9,0.9
    h7.6c0.5,0,0.9-0.4,0.9-0.9V80.9c0-2.3-1.9-5-3.9-6.5C57.6,74,57.1,74,56.6,74.3L56.6,74.3z M54.4,135.8h5.8
    c0.4,0,0.7,0.2,0.8,0.6l0.9,2.7h-9.4l0.9-2.7C53.7,136,54,135.8,54.4,135.8z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#959799"
										d="M54.5,136.4h1.7l-0.7,2.2h-1.9l0.6-2
    C54.3,136.5,54.4,136.4,54.5,136.4L54.5,136.4z M53.4,80.9V133c0,0.1,0.1,0.3,0.3,0.3h2.3c0.1,0,0.3-0.1,0.3-0.3V80.9
    c0-0.7-0.6-1.5-1.2-1.9c-0.1-0.1-0.3-0.1-0.4,0C53.9,79.4,53.4,80.2,53.4,80.9z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#E5E6E7"
										d="M60.1,80.9V133c0,0.1,0,0.3,0.1,0.3h0.8c0.1,0,0.1-0.1,0.1-0.3
    V80.9c0-0.7-0.2-0.9-0.4-1.4c0-0.1-0.1-0.1-0.2,0C60.3,79.9,60.1,80.2,60.1,80.9L60.1,80.9z M60.2,136.4h-0.8l0.7,2.2h1l-0.6-2
    C60.4,136.5,60.3,136.4,60.2,136.4z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#838587"
										d="M62,91h-9.4v0.5H62V91L62,91z M62,120.8h-9.4v0.5H62V120.8
    L62,120.8z M62,105.9h-9.4v0.5H62V105.9z"
									/>
								</g>
								<g>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#DF5C3B"
										d="M31.5,64.1c1.6-2.3,4-4.4,6.4-5.9c0.6-0.4,1.2-0.5,1.9-0.5
    c0.7,0,1.3,0.2,1.9,0.5c2.4,1.5,4.8,3.6,6.4,5.9c1.5,2.1,2.5,4.4,2.5,6.6v59.9c0,0.6-0.3,1.1-0.7,1.5c-0.4,0.4-1,0.6-1.7,0.6H31.4
    c-0.7,0-1.2-0.2-1.7-0.6c-0.5-0.4-0.7-0.9-0.7-1.5V70.7C28.9,68.6,29.9,66.3,31.5,64.1z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#F27635"
										d="M38.2,58.7c-4.6,2.8-8.7,7.8-8.7,12v59.9c0,0.9,0.9,1.6,1.9,1.6
    h16.8c1,0,1.9-0.7,1.9-1.6V70.7c0-4.2-4.1-9.2-8.7-12C40.4,58.1,39.1,58.1,38.2,58.7z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#F58C3D"
										d="M40.9,63.9c-2.6,1.6-4.9,4.4-4.9,6.8v58.6c0,0.5,0.5,0.9,1.1,0.9
    h9.5c0.6,0,1.1-0.4,1.1-0.9V70.7c0-2.4-2.3-5.2-4.9-6.8C42.2,63.6,41.5,63.6,40.9,63.9z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#FBC399"
										d="M42.9,70.7V128c0,0.4,0.4,0.7,0.8,0.7H45c0.4,0,0.8-0.3,0.8-0.7
    V70.7C45.8,68.2,42.9,68.3,42.9,70.7z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#DF5C3B"
										d="M50.4,81.7H29.1v0.5h21.3V81.7L50.4,81.7z M50.4,111.5H29.1v0.5
    h21.3V111.5L50.4,111.5z M50.4,96.6H29.1v0.5h21.3V96.6z"
									/>
								</g>
								<g>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#373435"
										d="M65.1,125.7l-18.8,3.2l0.8,2.4c0.4,1.2-0.3,2.2-1.5,2.2H42
    l-0.6,0.8c-0.8,1-2.4,1-3.1,0l-0.6-0.8H34c-1.3,0-1.9-1-1.5-2.2l0.8-2.4l-18.8-3.2c-0.5-0.1-0.8-0.5-0.7-1
    c0.2-1.4,0.3-2.5,0.7-3.6c0.9-2.2,2.7-3.3,4.6-4.6c5.8-4.2,13.5-9.7,13.5-14.6v-9.8c0-2,0.6-4,1.5-5.8c1.1-2.1,2.6-4,4-5.2
    c1-0.9,2.5-0.9,3.5,0c1.4,1.2,3,3.1,4,5.2C46.4,88,47,90,47,92.1v9.8c0,4.8,7.7,10.4,13.5,14.6c1.8,1.3,3.7,2.4,4.6,4.6
    c0.4,1.1,0.6,2.3,0.7,3.6C65.8,125.2,65.5,125.6,65.1,125.7z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#DBE7EE"
										d="M45.7,128.5l19.3-3.3c0.2,0,0.4-0.3,0.3-0.5
    c-0.3-2.7-0.5-4.6-3-6.4c-5.9-4.3-15.8-10.7-15.8-16.5v-9.8c0-4.4-2.8-8.4-5.3-10.6c-0.8-0.7-2.1-0.7-2.9,0
    c-2.5,2.2-5.3,6.2-5.3,10.6v9.8c0,5.7-9.9,12.1-15.8,16.5c-2.4,1.8-2.7,3.7-3,6.4c0,0.2,0.1,0.4,0.3,0.5l19.3,3.3l-0.9,2.9
    c-0.3,0.9,0.2,1.6,1.1,1.6h3.8l0.7,1c0.3,0.4,0.7,0.6,1.2,0.6c0.5,0,0.9-0.2,1.2-0.6l0.7-1h3.8c0.9,0,1.4-0.7,1.1-1.6L45.7,128.5z
    "
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#EBF3F6"
										d="M39.8,134.5c0.5,0,0.9-0.2,1.2-0.6l0.7-1h3.8c1,0,1.4-0.7,1-1.8
    l-0.1-0.4l-0.7-2.3l0.7-0.1l0.1,0c0-8.8,0-17.6,0-26.5v-9.4c0-2.5-0.5-4.4-1.7-6.6c-0.7-1.2-1.5-2.4-2.4-3.3
    c-0.4-0.4-0.8-0.8-1.2-1.2c-0.4-0.4-0.9-0.5-1.4-0.5C39.8,98.8,39.8,116.6,39.8,134.5z"
									/>
									<polygon
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#FDFDFD"
										points="44.7,131.6 42.2,131.6 42.2,89.4 43.5,89.9 42.2,88.6
    42.2,83.8 43.7,85.9 43.7,129.2 		"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#C4CDD2"
										d="M41.7,128.4v4.5h0.4v-1.1h4.6l-0.1-0.4h-4.6v-1.1h4.2l-0.1-0.4
    h-4.1v-1.2h3.7l-0.1-0.4H41.7L41.7,128.4z M46.7,100v0.4H40v9.5h6.7v0.4H40v9.5h6.7v0.4H40v14.4h-0.4v-14.4h-6.9v-0.4h6.9v-9.5
    h-6.9v-0.4h6.9v-9.5h-6.9V100h6.9V82H40v18H46.7L46.7,100z M37.8,128.4h-3.9l-0.1,0.4h3.7v1.2h-4.1l-0.1,0.4h4.2v1.1h-4.6
    l-0.1,0.4h4.6v1.1h0.4V128.4z"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										fill="#373435"
										d="M44,84c-0.2-0.3-1.4-1.5-1.6-1.8c-1.7-2.1-3.4-2.1-5.1,0
    C37,82.5,36,83.7,35.7,84C38.2,82.3,41.3,82.1,44,84L44,84z M26.1,127.4v-3.2h-6.6v2.1h-0.4v-2.1h-5v-0.7h5h0.4h6.6h0.4h6.2V91H33
    v37.5h-0.4v-4.4h-6.2v3.2H26.1L26.1,127.4z M53.4,127.4v-3.2H60v2.1h0.4v-2.1h5v-0.7h-5H60h-6.6H53h-6.2V91h-0.4v37.5h0.4v-4.4H53
    v3.2H53.4L53.4,127.4z M36.6,89.7c2.1-1,4.2-1,6.3,0c0.3,0.1,0.6,0.3,0.9,0.5c-0.3-0.3-0.6-0.6-0.9-0.9c-2.1-2.1-4.2-2.1-6.3,0
    c-0.3,0.3-0.6,0.6-0.9,0.9C36.1,90,36.4,89.8,36.6,89.7z"
									/>
								</g>
							</svg>
						</div>
					</div>
				</div>
				<div className="mt-3 exchange-content">
					ACY Launch is a profitable, unique, and engaging IDO platform to
					empower the most innovative crypto projects by leveraging the power of
					community.
				</div>
			</div>
		</div>
	);
};

export default SpaceLoader;
