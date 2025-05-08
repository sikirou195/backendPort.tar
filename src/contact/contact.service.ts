import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateContactDto } from './dto/create-contact.dto';

const prisma = new PrismaClient();

@Injectable()
export class ContactService {
  async create(data: CreateContactDto) {
    return await prisma.contact.create({ data });
  }

  async findAll() {
    return await prisma.contact.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: number) {
    return await prisma.contact.findUnique({ where: { id } });
  }

  async remove(id: number) {
    return await prisma.contact.delete({ where: { id } });
  }
}
