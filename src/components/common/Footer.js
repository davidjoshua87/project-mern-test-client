const Footer = () => {
	const link = "https://jds.my.id";
	const target = "_blank";

	return (
		<div className="container text-center footer" style={{ marginTop: "auto" }}>
			© <small>{new Date().getFullYear()}</small> JDs{" "}
			<a href={link} target={target}>
				jds.my.id
			</a>
		</div>
	);
};

export default Footer;
