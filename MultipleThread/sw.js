self.addEventListener("install", function(event) {
	event.waitUntil(
		caches
			.open("my-cache")
			.then(function(cache) {
				return cache.addAll([]);
			})
			.then(function() {
				return self.skipWaiting();
			})
	);
});
self.addEventListener("activate", function(event) {
	return self.clients.claim();
});

function calculateAndReturnRandomNumberSum() {
	let sum = 0;
	for (let i = 0; i <= 100000000; i++) {
		//Generate random between 1-9 and add to sum
		sum += Math.floor(Math.random() * 9);
	}
	return sum;
}

self.onmessage = function(event) {
	var eventData = event.data;
	switch (eventData.type) {
		case "CALCULATE_RANDOM_NUMBER_SUM":
			self.postMessage({
				result: calculateAndReturnRandomNumberSum()
			});
			break;
	}
};
