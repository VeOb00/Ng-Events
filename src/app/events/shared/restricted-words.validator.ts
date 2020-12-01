import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]): any | null {
  return (control: FormControl): { [key: string]: string } | null => {
    if (!words) return null;

    const invalidWords = words
      .map((w: string) => (control.value.includes(w) ? w : null))
      .filter((w: string | null) => w != null);

    return invalidWords && invalidWords.length > 0
      ? { restrictedWords: invalidWords.join(', ') }
      : null;
  };
}
