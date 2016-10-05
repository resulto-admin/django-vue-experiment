from jinja2 import Environment


class VueJinja2Environment(Environment):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.block_start_string = "<%"
        self.block_end_string = "%>"
        self.variable_start_string = "%%"
        self.variable_end_string = "%%"
        self.comment_start_string = "<#"
        self.comment_end_string = "#>"
