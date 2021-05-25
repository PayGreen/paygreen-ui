import { useEffect } from 'react';

/**
 * Hook that detects when we click outside of the passed ref and when targeted component is with specific condition
 * @param {object} ref - reference used to detect click outside
 * @param {boolean} condition - specific condition when we want to detect outside click (like when component is open)
 * @param {() => void} callback - callback function to apply if condition is true (callback is necessary to avoid too many rerenders)
 */
const useOutsideAlerter = (ref, condition, callback) => {
    useEffect(() => {
        const handleClickOutside = e => {
            if (ref?.current && !ref.current.contains(e.target) && condition) {
                callback();
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, condition, callback]);
};

export { useOutsideAlerter };
