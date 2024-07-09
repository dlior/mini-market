import { ValueTransformer } from 'typeorm/decorator/options/ValueTransformer';

export class CustomerNameTransformer implements ValueTransformer {
  to(value: string): string {
    return value.toUpperCase();
  }

  from(value: string): Record<string, string> {
    const [firstName, lastName] = value.toLowerCase().split(' ');
    return {
      firstName,
      lastName,
    };
  }
}
