const workerUrl =
	location.origin + "/ServiceWorkerMultiThreading/MultipleThread/sw.js";

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
	const array = ["Thread1", "Thread2", "Thread3", "Thread4"];
	array.forEach(thread => {
		initializeSW()
			.then(registration => {
				this.registration = registration;
				const worker = new Worker(workerUrl);
				worker.postMessage({
					type: "CALCULATE_RANDOM_NUMBER_SUM"
				});
				worker.onmessage = event => {
					const element = document.getElementById(thread);
					element.innerText = event.data.result.toString();
				};
			})
			.catch(e => {
				throw new Error(e);
			});
	});
}

animateFlip();
