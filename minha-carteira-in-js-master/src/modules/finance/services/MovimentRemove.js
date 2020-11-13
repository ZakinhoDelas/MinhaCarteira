class MovimentRemove {
  constructor(FinanceRepository) {
    this.financeRepository = FinanceRepository;
  }

  async execute(data) {
    const { Movimentid, iduser_ } = data;
    try {
      const moviment = await this.financeRepository.movimentRemove(
        Movimentid,
        iduser_,
      );
      if (!moviment.value)
        return 'this moviment does not exist or does not belong to you';
      return moviment;
    } catch (err) {
      return null;
    }
  }
}
module.exports = MovimentRemove;
