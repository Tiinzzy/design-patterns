class BuyIngredients:

    @staticmethod
    def run(input_data):
        # do something with input_data and return the result,
        # go to the market and buy whatever is in input data
        process_result = f"I have {input_data['money']} money and just bought {str(input_data['ingredients'])}"
        return process_result


class Deliver:
    @staticmethod
    def run(input_data):
        # do something with input_data and return the result,
        # get a cab and deliver it to restaurant
        process_result = input_data
        process_result += '\nI have to get a cab and deliver it to restaurant'
        return process_result


class Cook:

    def __init__(self, name):
        self.__name = name

    def run(self, input_data):
        # do something with input_data and return the result,
        # ask the cook to cook the dish
        process_result = input_data
        process_result += f'\nIngredients are delivered, I ({self.__name}) cooked the dish and it is ready. '
        return process_result


class OrderSalad:

    @staticmethod
    def run(input_data):
        process_result = input_data
        process_result += f'\nOrdering and adding salad'
        return process_result


class Chain:
    def __init__(self):
        self.__process = []

    def add_process(self, p):
        self.__process.append(p)

    def run(self, init_data):
        step_data = init_data
        for p in self.__process:
            step_data = p.run(step_data)
        return step_data

    def clear(self):
        self.__process = []


if __name__ == "__main__":
    data = {'money': 100, 'ingredients': {'flower': 100, 'raisins': 50, 'salt': 5}}

    chain = Chain()
    chain.add_process(BuyIngredients())
    chain.add_process(Deliver())
    chain.add_process(Cook('kamran'))
    result = chain.run(data)
    print(result)

    print('--------------------')

    chain.clear()
    chain.add_process(BuyIngredients())
    chain.add_process(Deliver())
    chain.add_process(Cook('tina'))
    chain.add_process(OrderSalad())
    result = chain.run(data)
    print(result)
