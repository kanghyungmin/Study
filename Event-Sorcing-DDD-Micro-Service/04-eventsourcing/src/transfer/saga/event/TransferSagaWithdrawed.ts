import { Event } from "src/eventsourcing/core/Event";

export class TransferSagaWithdrawed extends Event{
  constructor(
    public  transferId?: string,
    
  ) {
    super();
    console.log('TransferSagaWithdrawed')
  }
    public getTransferId(): string {
        return this.transferId;
    }

    public setTransferId(transferId: string): void {
        this.transferId = transferId;
    }

}

