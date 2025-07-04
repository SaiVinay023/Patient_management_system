describe('AssignmentService', () => {
  let service: AssignmentService;

  beforeEach(() => {
    service = new AssignmentService(/* mock repository */);
  });

  it('should return 0 if treatment ended', () => {
    const startDate = '2023-01-01';
    const numberOfDays = 10;
    jest.useFakeTimers().setSystemTime(new Date('2023-02-01'));
    const remainingDays = service.calculateRemainingDays(startDate, numberOfDays);
    expect(remainingDays).toBe(0);
    jest.useRealTimers();
  });

  it('should return correct remaining days', () => {
    const startDate = new Date();
    const numberOfDays = 10;
    const remainingDays = service.calculateRemainingDays(startDate.toISOString(), numberOfDays);
    expect(remainingDays).toBeGreaterThan(0);
  });
});
