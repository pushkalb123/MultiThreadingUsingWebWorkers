const workerUrl =
	location.origin + "/ServiceWorkerMultiThreading/2Thread/sw.js";

function animateFlip() {
	setInterval(() => {
		const card = document.getElementById("card");
		if (card.classList.contains("flipped")) {
			card.classList.remove("flipped");
		} else {
			card.classList.add("flipped");
		}
	}, 1000);
}

function initializeSW() {
	return navigator.serviceWorker.register(workerUrl);
}

function calculateSum() {
	initializeSW()
		.then(registration => {
			this.registration = registration;
			const worker = new Worker(workerUrl);
			worker.postMessage({
				type: "CALCULATE_RANDOM_NUMBER_SUM"
			});
			worker.onmessage = event => {
				const element = document.getElementById("calculate");
				element.innerText = event.data.result.toString();
			};
		})
		.catch(e => {
			throw new Error(e);
		});
}

animateFlip();
