import { EventSourcedAggregate } from 'src/eventsourcing/core/EventSourcedAggregate';
import {
    Entity,
    PrimaryColumn,
    Column,
    VersionColumn,
  } from 'typeorm';
import { JsonUtilService } from '../../../util/JsonUtil';
import { ClassConstructor } from 'class-transformer';
import { Account } from 'src/account/aggregate/Account';
import { classMap } from './AggreageteEventORM';
  
  @Entity('TB_AGGREGATE')
  export class AggregateORM {
    @PrimaryColumn()
    id: string;
  
    @Column()
    type: string;
  
    @Column()
    sequence: number;
  
    @Column({ default: false })
    deleted: boolean;
  
    @VersionColumn()
    version: number;
  
    constructor(aggregate : EventSourcedAggregate | null) {
        if(aggregate == null) return;
        this.id = aggregate.identifier();
        this.type = aggregate.constructor.name;
        this.sequence = aggregate.getSequence()
        this.version = aggregate.getVersion();
        this.deleted = aggregate.isDeleted();
      
    }
  
    public toAggregate<T>(): T {
        let aggregateConstructor = classMap[this.type as string] as ClassConstructor<T>;
        let aggregate = JsonUtilService.fromJson<T>(
            "{}",
            aggregateConstructor
        )   
        return aggregate;
    }
  }