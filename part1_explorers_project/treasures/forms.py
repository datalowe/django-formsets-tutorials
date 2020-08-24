from django import forms

class TreasureForm(forms.Form):
    name = forms.CharField(max_length=100)
    estimated_price = forms.IntegerField()

    # def has_changed(self, *args, **kwargs):
    #     print('FOOOOOOOOOO!')
    #     return super().has_changed()
