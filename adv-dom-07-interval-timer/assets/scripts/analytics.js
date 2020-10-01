// Setting an interval, setInterval also returns an Id:
const intervalId = setInterval(() => {
  console.log('Sending analytics data...')
}, 2000);

// To stop the interval:
document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  clearInterval(intervalId);
});