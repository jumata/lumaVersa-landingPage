// tailwind.config.mjs
import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        brand: { 50:'#e8f1fb',100:'#cbe0f5',600:'#0a5fa1',700:'#084a7c',800:'#073a61' }
      },
      boxShadow: { elev: '0 10px 30px rgba(0,0,0,.08)' },
      borderRadius: { xl: '16px', '2xl': '20px' },
      maxWidth: { container: '1200px' },
      fontFamily: { poppins: ['Poppins','ui-sans-serif','system-ui'] }
    }
  },
  plugins: []
});
