import { Entity,Column , CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany,JoinTable} from "typeorm"
import { Person } from "./utils/Person";
import {Transaction} from "./Transaction"
import { Banker } from "./Banker";

@Entity('client')   // ()--> it include name of the table 
export class Client extends Person {                     // This way the client tbale is extending with person  so the client table have all the columns associated with Person
  
	// Nullable true means it can contain null vlaues also
 
    @Column({
		type: 'numeric',
		nullable: true,
	})
	balance: number;

	@Column({
		name: 'active',
		default: true,
	})
	is_active: boolean;

	@Column({
		type: 'simple-json',
		nullable: true,
	})
	additional_info: {
		age: number;
		hair_color: string;
	};

	@Column({ type: 'simple-array', default: [] })
	family_members: string[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@ManyToMany((type) => Banker, {
		cascade: true,
	})
	bankers: Banker[];

	@OneToMany(
		() => Transaction,
		(transaction) => transaction.client
	)
	transactions: Transaction[];


}