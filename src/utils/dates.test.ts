import { calculateEndsAt, formatDate, padTo2Digits } from "./dates";

describe('the "calculateEndsAt" funciton', () => {
  describe('given startsAt is "2022-08-19"', () => {
    describe("and the duration is 3 days", () => {
      it('should return "2022-08-22"', () => {
        const endsAt = calculateEndsAt(new Date("2022-08-19"), 3);
        expect(endsAt).toEqual("2022-08-22");
      });
    });
  });
  describe('given startsAt is "2020-02-29"', () => {
    describe("and the duration is 1 day", () => {
      it('should return "2020-03-01"', () => {
        const endsAt = calculateEndsAt(new Date("2020-02-29"), 1);
        expect(endsAt).toEqual("2020-03-01");
      });
    });
  });
  describe('given startsAt is "2022-12-31"', () => {
    describe("and the duration is 1 day", () => {
      it('should return "2023-01-01"', () => {
        const endsAt = calculateEndsAt(new Date("2022-12-31"), 1);
        expect(endsAt).toEqual("2023-01-01");
      });
    });
  });
});

describe('the "formatDate" funciton', () => {
  describe('given date is "new Date("2022-08-22")"', () => {
    it('should return "2022-08-22"', () => {
      expect(formatDate(new Date("2022-08-22"))).toEqual("2022-08-22");
    });
  });
});

describe('the "padTo2Digits" funciton', () => {
  describe('given number is "2"', () => {
    it('should return "02"', () => {
      expect(padTo2Digits(2)).toEqual("02");
    });
  });
  describe('given number is "12"', () => {
    it('should return "12"', () => {
      expect(padTo2Digits(12)).toEqual("12");
    });
  });
});
