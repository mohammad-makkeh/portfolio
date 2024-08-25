import { useEffect, useRef } from 'react';

function usePencilScratchSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastMoveTime = useRef<number>(0);
  const speedRef = useRef<number>(0);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Load the pencil sound
    audioRef.current = new Audio('/pencill.mp3');
    audioRef.current.loop = true; // Loop the sound

    function handleMouseMove(e: MouseEvent) {
      if (!audioRef.current) return;

      const now = Date.now();
      const timeDelta = now - lastMoveTime.current;
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastPosition.current.x, 2) +
        Math.pow(e.clientY - lastPosition.current.y, 2)
      );

      // Calculate the speed of the cursor movement
      speedRef.current = distance / timeDelta;

      // Adjust playback rate (pitch) and volume based on speed
    //   audioRef.current.playbackRate = Math.min(2, 0.5 + speedRef.current / 150); // Adjust pitch
      audioRef.current.volume = Math.min(3, speedRef.current / 10); // Adjust volume

      // If the sound is not playing, start it
      if (audioRef.current.paused) {
        audioRef.current.play();
      }

      // Reset the fade-out timeout
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }

      // Update the last known position and time
      lastPosition.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = now;

      // Set up a fade-out when the user stops moving
      fadeTimeoutRef.current = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.volume = 0;
          audioRef.current.pause();
        }
      }, 200); // Adjust delay as needed
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return null;
}

export default usePencilScratchSound;
