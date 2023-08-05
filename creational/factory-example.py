class Button:
    html = "<button></button>"

    def get(self):
        return self.html


class Image:
    html = "<img></img>"

    def get(self):
        return self.html


class Input:
    html = "<input></input>"

    def get(self):
        return self.html


class TagFactory:
    @staticmethod
    def create(typ):
        if typ in globals().keys():
            return globals()[typ]()
        else:
            raise Exception("Our factory doesn't carry this type! " + str(typ))


if __name__ == "__main__":
    print(Image().get())
    print(Input().get())
    print(Button().get())

    print(TagFactory.create('Image').get())

    elements = ['Image', 'Input']
    for e in elements:
        print(TagFactory.create(e).get())
