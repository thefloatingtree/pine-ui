import styled from "styled-components";

const StyledLoadingBar = styled.div`

// Animation =============================================
// Edit these at random intervals to change the animation.
@keyframes loader {

	0% {
		width: 0;
	}

	100% {
		width: 100%;
	}

}

// Bar ============================================

	border-radius: 60px;
	overflow: hidden;
    width: 100%;

	& span {
		display: block;
	}

& .bar {
  background: rgba(0,0,0,0.075);
}

& .progress {
  animation: loader ${props => props.duration || '8s'} ease forwards;
  // Change the animation fill mode 'infinite' to 'forwards' to stop the animation from repeating.
  background: ${props => props.color || "#6c6c6c"};
  color: #fff;
  padding: 5px;
  width: 0;
}

// Vertical Centering ==============================
// You don't need this to make it work on your site.

  left: 50%;
  max-width: 50%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%,-50%,0);

    
`
export default function LoadingBar(props) {
    return (
        <StyledLoadingBar color={props.color} duration={props.duration} className={props.className}>
            <span className="bar">
                <span className="progress"></span>
            </span>
        </StyledLoadingBar>
    )
}