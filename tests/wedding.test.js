// Wedding Website Unit Tests
describe('Wedding Website', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="music-player">
        <button class="music-toggle">▶</button>
        <audio id="wedding-music" src="music/canon-in-d.mp3"></audio>
      </div>
      <div class="countdown-timer" data-wedding-date="2025-11-20T14:30:00"></div>
      <form class="rsvp-form">
        <input type="text" name="name" required>
        <input type="email" name="email" required>
        <select name="attendance" required>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <button type="submit">Submit RSVP</button>
      </form>
    `;
  });

  describe('Music Player', () => {
    test('should toggle play/pause', () => {
      const audio = document.getElementById('wedding-music');
      const toggle = document.querySelector('.music-toggle');
      
      audio.play = jest.fn();
      audio.pause = jest.fn();
      
      toggle.click();
      expect(audio.play).toHaveBeenCalled();
      expect(toggle.textContent).toBe('⏸');
    });
  });

  describe('Countdown Timer', () => {
    test('should calculate time remaining', () => {
      const weddingDate = new Date('2025-11-20T14:30:00');
      const now = new Date('2025-11-19T14:30:00');
      const timeLeft = weddingDate - now;
      
      expect(timeLeft).toBe(86400000); // 1 day in milliseconds
    });
  });

  describe('RSVP Form', () => {
    test('should validate required fields', () => {
      const form = document.querySelector('.rsvp-form');
      const nameInput = form.querySelector('input[name="name"]');
      
      expect(nameInput.hasAttribute('required')).toBe(true);
    });

    test('should submit valid form data', () => {
      const form = document.querySelector('.rsvp-form');
      const submitSpy = jest.fn();
      form.addEventListener('submit', submitSpy);
      
      form.querySelector('input[name="name"]').value = 'John Doe';
      form.querySelector('input[name="email"]').value = 'john@example.com';
      form.querySelector('select[name="attendance"]').value = 'yes';
      
      form.dispatchEvent(new Event('submit'));
      expect(submitSpy).toHaveBeenCalled();
    });
  });
});