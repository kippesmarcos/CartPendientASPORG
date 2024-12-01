import checkbuySound from '/sounds/checkbuy.mp3';

export function playSuccessSound() {
  const audio = new Audio(checkbuySound);
  audio.volume = 0.2; // Reduce volume to 20% for a gentler sound
  return audio.play().catch(error => {
    console.warn('Error playing success sound:', error);
  });
}