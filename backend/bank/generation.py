from random import randint

def generate_card_number(self):
		max_attempts = 5
		attempts = 0

		while attempts < max_attempts:
			num_part1 = randint(1000, 9999)
        	num_part2 = randint(1000, 9999)
        	num_part3 = randint(1000, 9999)
        	num_part4 = randint(1000, 9999)
            canditate = str(num_part1) + str(num_part2) + str(num_part3) + str(num_part4)
			if not self.__class__.objects.filter(card_number=canditate).exists():
				return canditate
			
			attempts += 1

		raise ValueError('It was not possible to generate a unique card number for the maximum number of attempts.')

def generate_account_number(instance):
		max_attempts = 5
		attempts = 0

		while attempts < max_attempts:
			random_number = str(randint(100000, 999999))

			if not instance.__class__.objects.filter(account_number=random_number).exists():
				return random_number
			
			attempts += 1

		raise ValueError('It was not possible to generate a unique account number for the maximum number of attempts.')
