import { useState } from 'react';
import './App.css';

function App() {
	const [previousTerms, setPreviousTerms] = useState([])
	const [currentTerm, setCurrentTerm] = useState("")
	const [currentOperator, setCurrentOperator] = useState("")
	const [value, setValue] = useState(null)
	const [answer, setAnswer] = useState(null)

	const onClickNumber = (num) => {
		var newNum = currentTerm + num;
		setCurrentTerm(newNum)
	}

	const onClickOperator = (operator) => {
		if (currentTerm === "") {
			return
		}
		setPreviousTerms([...previousTerms, {
			value: currentTerm,
			operator: operator
		}])

		if (value) {
			let num1 = parseFloat(currentTerm)
			let num2 = value;
			if (currentOperator === "+") {
				setValue(num2 + num1)
			} else if (currentOperator === "-") {
				setValue(num2 - num1)
			} else if (currentOperator === "×") {
				setValue(num2 * num1)
			} else if (currentOperator === "÷") {
				setValue(num2 / num1)
			}
		} else {
			setValue(parseFloat(currentTerm))
		}

		setCurrentOperator(operator)
		setCurrentTerm("")
	}

	const onClickAC = () => {
		setAnswer(null)
		setCurrentOperator("")
		setCurrentTerm("")
		setPreviousTerms([])
		setValue(null)
	}

	const onClickEquals = () => {
		if (previousTerms.length>0) {
			let num1 = parseFloat(currentTerm)
			let num2 = value;
			if (currentOperator === "+") {
				var num3 = num2 + num1
				setValue(num3)
			} else if (currentOperator === "-") {
				var num3 = num2 - num1
				setValue(num3)
			} else if (currentOperator === "×") {
				var num3 = num2 * num1
				setValue(num3)
			} else if (currentOperator === "÷") {
				var num3 = num2 / num1
				setValue(num3)
			}
		} else {
			setValue(parseFloat(currentTerm))
		}
		setAnswer(num3)
	}

	return (
		<div class="calculator">
			<div class="calculator-header"></div>
			<div class="calculator-body">
				<div class="calculator-color-changer">
					<div class="calculator-color-toggler">
						<button ></button>
					</div>
				</div>
				<div class="calculator-screen">
					<div className="">
						{answer ? <div className="calculator-answer-output"> {answer}</div> :
							<>
								<div className="calculator-main-output">{currentTerm}</div>
								<div className="calculator-secondary-output">
									{previousTerms.map(term => (
										<>{term.value} {term.operator} </>
									))}
								</div>
							</>}

					</div>
				</div>
				<div class="calculator-button-grid">
					<div class="calculator-button-row">
						<button class="button-AC" onClick={onClickAC}>AC</button>
						<button class="button-DEL" onClick={() => { setCurrentTerm(currentTerm.substring(0, currentTerm.length - 1)) }}>
							<svg xmlns="http://www.w3.org/2000/svg" width="35" height="26" viewBox="0 0 35 26">
								<g id="Icon_feather-delete" data-name="Icon feather-delete" transform="translate(1 1)">
									<path id="Path_1" data-name="Path 1" d="M31.5,6H12L1.5,18,12,30H31.5a3,3,0,0,0,3-3V9A3,3,0,0,0,31.5,6Z" transform="translate(-1.5 -6)" fill="none" stroke="#0d0d0d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
									<path id="Path_2" data-name="Path 2" d="M27,13.5l-9,9" transform="translate(-1.5 -6)" fill="none" stroke="#0d0d0d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
									<path id="Path_3" data-name="Path 3" d="M18,13.5l9,9" transform="translate(-1.5 -6)" fill="none" stroke="#0d0d0d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
								</g>
							</svg>
						</button>
						<button class="button-divide" onClick={() => { onClickOperator("÷") }}>÷</button>
					</div>
					<div class="calculator-button-row">
						<button class="button-7" onClick={() => { onClickNumber(7) }}>7</button>
						<button class="button-8" onClick={() => { onClickNumber(8) }}>8</button>
						<button class="button-9" onClick={() => { onClickNumber(9) }}>9</button>
						<button class="button-9" onClick={() => { onClickOperator("×") }}>×</button>
					</div>
					<div class="calculator-button-row">
						<button class="button-4" onClick={() => { onClickNumber(4) }}>4</button>
						<button class="button-5" onClick={() => { onClickNumber(5) }}>5</button>
						<button class="button-6" onClick={() => { onClickNumber(6) }}>6</button>
						<button class="button-1" onClick={() => { onClickOperator("+") }}>+</button>
					</div>
					<div class="calculator-button-row">
						<button class="button-4" onClick={() => { onClickNumber(3) }}>3</button>
						<button class="button-5" onClick={() => { onClickNumber(2) }}>2</button>
						<button class="button-6" onClick={() => { onClickNumber(1) }} >1</button>
						<button class="button-1" onClick={() => { onClickOperator("-") }}>-</button>
					</div>
					<div class="calculator-button-row">
						<button class="button-dot" onClick={() => { onClickNumber(".") }}>.</button>
						<button class="button-0" onClick={() => { onClickNumber(0) }}>0</button>
						<button class="button-equals" onClick={onClickEquals} >=</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
