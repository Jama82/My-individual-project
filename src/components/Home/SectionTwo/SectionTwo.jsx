import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./SectionTwo.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
	{
		label: "All types of bakery products",
		imgPath:
			"https://images.unsplash.com/photo-1566698629409-787a68fc5724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGJ1bnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
	},
	{
		label: "Croissants",
		imgPath:
			"https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JvaXNzYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		label: "Creamy buns",
		imgPath:
			"https://media.istockphoto.com/photos/swedish-semla-picture-id509116178?b=1&k=20&m=509116178&s=170667a&w=0&h=OPHSo0lB1HJzZdH_odKzOw-v_qMPHvGLeW2XrBpaJ1E=",
	},
	{
		label: "Hachapuri",
		imgPath:
			"https://media.istockphoto.com/photos/fresh-homemade-khachapuri-ajarian-on-rustic-wooden-background-picture-id1191485822?b=1&k=20&m=1191485822&s=170667a&w=0&h=_uq1gjLDOD4fm4AR4jdGhj3oyeCKowvqiqaAPt9ELFQ=",
	},
];

function SectionTwo() {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

	return (
		<div className="carousel">
			<Box sx={{ maxWidth: 1100, flexGrow: 1, minHeight: "auto" }}>
				<Paper
					square
					elevation={0}
					sx={{
						height: 50,
						pl: 50,
						color: "#890f0d",
					}}
				>
					<Typography>{images[activeStep].label}</Typography>
				</Paper>
				<AutoPlaySwipeableViews
					axis={theme.direction === "rtl" ? "x-reverse" : "x"}
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents
				>
					{images.map((step, index) => (
						<div key={step.label}>
							{Math.abs(activeStep - index) <= 2 ? (
								<Box
									component="img"
									sx={{
										height: 700,
										
										overflow: "hidden",
										width: "100%",
										alignItems: "center",
										margin: "0 auto",
									}}
									src={step.imgPath}
									alt={step.label}
								/>
							) : null}
						</div>
					))}
				</AutoPlaySwipeableViews>
				<MobileStepper
					steps={maxSteps}
					position="static"
					activeStep={activeStep}
					nextButton={
						<Button
							style={{ color: "#890f0d" }}
							size="small"
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}
						>
							Next
							{theme.direction === "rtl" ? (
								<KeyboardArrowLeft />
							) : (
								<KeyboardArrowRight />
							)}
						</Button>
					}
					backButton={
						<Button
							size="small"
							onClick={handleBack}
							disabled={activeStep === 0}
							style={{ color: "#890f0d" }}
						>
							{theme.direction === "rtl" ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
							Back
						</Button>
					}
				/>
			</Box>
		</div>
	);
}

export default SectionTwo;
