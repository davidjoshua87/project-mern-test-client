const Footer = () => {
	const link = "https://jds.my.id";
	const target = "_blank";

	return (
		<div className="container text-center footer" style={{ marginTop: "auto" }}>
			<small>©{new Date().getFullYear()}</small>.{" "}
			<a href={link} target={target} style={{textDecoration: "none"}}>
			JDs Web Developer
			</a>
		</div>
	);
};

export default Footer;
