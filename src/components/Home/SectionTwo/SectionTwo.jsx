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
import { BakeryDining } from "@mui/icons-material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
	{
		imgPath:
			"https://robbreport.com/wp-content/uploads/2017/11/princi_at_the_roastery_featured.jpg?w=1024",
	},
	{
		imgPath:
			"https://media.blogto.com/articles/20190906-FornoQueen7.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70",
	},
	{
		imgPath:
			"https://media.blogto.com/articles/331c-20110617-Nino20D27Aversa-4.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70",
	},
	{
		imgPath:
			"https://romanacakehouse.com/wp-content/uploads/2021/07/featured-1.jpg",
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
			<Box sx={{ maxWidth: 1400, flexGrow: 1, minHeight: "auto" }}>
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
