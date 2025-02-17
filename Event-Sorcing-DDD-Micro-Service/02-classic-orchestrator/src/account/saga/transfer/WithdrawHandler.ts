import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventPattern } from '@nestjs/microservices';  // EventPattern을 사용하여 이벤트 리스닝
import { Withdraw } from 'src/account/command/Withdraw';
import { AccountService } from 'src/account/service/account.service';

@Injectable()
export class WithdrawHandler {
  constructor(private readonly accountService: AccountService) {}

  // 'withdraw_event'라는 이름으로 발행된 이벤트를 수신
  @OnEvent(Withdraw.name)
  async onWithdraw(command: Withdraw): Promise<void> {
    // command 인자로 'Withdraw' 객체가 전달됨
      await this.accountService.withdraw(command);  // accountService의 withdraw 메서드를 호출
  }
}
