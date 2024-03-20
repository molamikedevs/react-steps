import React, { useState } from 'react'

const messages = [
	'I love football a lot ⚽',
	"Writing code is something I can't go a day without 👨‍💻",
	'I want to cover all the basic concepts of JavaScript this 2024 {}',
]

const App = () => {
	const [step, setStep] = useState(1)

	const handlePrevious = () => {
		if (step > 1) setStep(step - 1)
	}

	const handleNext = () => {
		if (step < 3) setStep(step + 1)
	}

	return (
		<div className="steps">
			<div className="numbers">
				<div className={step >= 1 ? 'active' : ''}>1</div>
				<div className={step >= 2 ? 'active' : ''}>2</div>
				<div className={step >= 3 ? 'active' : ''}>3</div>
			</div>

			<p className="message">
				Step: {step} {messages[step - 1]}
			</p>

			<div className="buttons">
				<button
					onClick={handlePrevious}
					style={{ backgroundColor: ' #7950f2', color: '#fff' }}>
					Previous
				</button>
				<button
					onClick={handleNext}
					style={{ backgroundColor: ' #7950f2', color: '#fff' }}>
					Next
				</button>
			</div>
		</div>
	)
}

export default App
