```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    // Add a condition to prevent infinite redirects
    // For example, only redirect if some state changed
    // Or if there is an external trigger to reroute.
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default MyComponent;
```