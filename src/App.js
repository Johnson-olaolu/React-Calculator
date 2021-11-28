import './App.css';

function App() {
	return (
		<div class = "calculator">
			<div class="calculator-header"></div>
			<div class="calculator-body">
				<div class="calculator-color-changer"></div>
				<div class="calculator-screen"></div>
				<div class="calculator-button-grid">
					<div class="calculator-button-row">
						<button class="button-AC">AC</button>
						<button class="button-DEL">DEL</button>
						<button class="button-divide">divide</button>
					</div>
					<div class="calculator-button-row">
						<button class="button-7">7</button>
						<button class="button-8">8</button>
						<button class="button-9">9</button>
						<button class="button-9">x</button>
					</div>
					<div class="calculator-button-row">
						<button class="button-4">4</button>
						<button class="button-5">5</button>
						<button class="button-6">6</button>
						<button class="button-1">1</button>
					</div>
					<div class="calculator-button-row">
						<button class="button-dot">.</button>
						<button class="button-0">0</button>
						<button class="button-equals">=</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
