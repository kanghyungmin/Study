import { Event } from "src/eventsourcing/core/Event";

export class TransferSagaCompleted extends Event{
  constructor(
    public  transferId?: string,
    
  ) {
    super();
  }
    public getTransferId(): string {
        return this.transferId;
    }

    public setTransferId(transferId: string): void {
        this.transferId = transferId;
    }

}

