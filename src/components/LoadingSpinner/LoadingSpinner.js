const LoadingSpinner = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#ccc;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#000;stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="40" stroke="url(#grad1)" stroke-width="15" fill="none">
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}
export default LoadingSpinner
