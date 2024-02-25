function Footer() {
	return (
		<footer className="bg-Very_Dark_Violet py-12 md:px-32 px-8 ">
			<div className="grid md:grid-cols-[30%_70%] grid-cols-1 gap-8 ">
				<div className=" -md:flex -md:justify-center">
					<img src="images/logo-white.svg" alt="logo" />
				</div>

				<div className="flex md:justify-evenly -md:flex-col -md:items-center -md:gap-8">
					<div>
						<h4 className="font-bold mb-6 text-white -md:text-center">
							Features
						</h4>
						<nav>
							<ul className="text-Grayish_Violet flex flex-col gap-3 -md:text-center">
								<li>
									<a href="#">Link Shortening</a>
								</li>
								<li>
									<a href="#">Branded Links</a>
								</li>
								<li>
									<a href="#">Analytics</a>
								</li>
							</ul>
						</nav>
					</div>
					<div>
						<h4 className="font-bold mb-6 text-white -md:text-center">
							Resources
						</h4>
						<nav>
							<ul className="text-Grayish_Violet flex flex-col gap-3 -md:text-center">
								<li>
									<a href="#">Blog</a>
								</li>
								<li>
									<a href="#">Developers</a>
								</li>
								<li>
									<a href="#">Support</a>
								</li>
							</ul>
						</nav>
					</div>
					<div>
						<h4 className="font-bold mb-6 text-white -md:text-center">
							Company
						</h4>
						<nav>
							<ul className="text-Grayish_Violet flex flex-col gap-3 -md:text-center">
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Our Team</a>
								</li>
								<li>
									<a href="#">Careers</a>
								</li>
								<li>
									<a href="#">Contact</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="flex gap-3 -md:text-center">
						<a className="text-white" href="www.facebook.com" target="blank">
							<i className="fa-brands fa-facebook fa-xl"></i>
						</a>
						<a className="text-white" href="www.twitter.com" target="blank">
							<i className="fa-brands fa-twitter fa-xl"></i>
						</a>
						<a className="text-white" href="www.pinterest.com" target="blank">
							<i className="fa-brands fa-pinterest fa-xl"></i>
						</a>
						<a className="text-white" href="www.instagram.com" target="blank">
							<i className="fa-brands fa-instagram fa-xl"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
