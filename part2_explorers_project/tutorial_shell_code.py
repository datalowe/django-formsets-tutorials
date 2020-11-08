from django import forms

class TreasureForm(forms.Form):
    name = forms.CharField(max_length=100)
    estimated_price = forms.IntegerField()


f1 = TreasureForm() # first form
f2 = TreasureForm() # second form


print(f1.as_p())


f1.initial


f3 = TreasureForm(initial={'name':'Rock'})


f3.initial
# output: {'name': 'Rock'}


print(f3.as_p())

f4 = TreasureForm(data={'name':'The Holy Grail', 'estimated_price':'300'}, initial={'name':'Rock'})


f4.data
# outputs {'name': 'The Holy Grail', 'estimated_price': '300'}


f3.is_bound # False
f4.is_bound # True


f4.has_changed() # True
f5 = TreasureForm(data={}) # implicitly sets `initial` data to {}
f5.has_changed() # False


f4.is_valid() # True
f6 = TreasureForm({'name':'An ex-parrot', 'estimated_price':'Very high'}, initial={'name':'Rock'})
f6.has_changed() #True
f6.is_valid() # False


f4.cleaned_data # {'name': 'The Holy Grail', 'estimated_price': 300}
f6.cleaned_data # {'name': 'An ex-parrot'}


f4.errors # {} 
f6.errors # {'estimated_price': ['Enter a whole number.']}


# this won't do what we want
my_forms = []
for i in range(3):
    form = TreasureForm()
    my_forms.append(form)


print(my_forms[0].as_p())
print(my_forms[1].as_p())


from django.forms import formset_factory
# step 1 we already did earlier, when we defined our TreasureForm class
TreasureFormSet = formset_factory(TreasureForm) # step 2
treasure_formset = TreasureFormSet() # step 3
for form in treasure_formset.forms: # step 4
    print(form.as_p())


TreasureFormSet = formset_factory(TreasureForm, extra=2)
treasure_formset = TreasureFormSet()
for form in treasure_formset.forms:
    print(form.as_p())


treasure_formset_data = {
    'form-0-name': 'An Irish shoebox',
    'form-0-estimated_price': '0',
    'form-1-name': 'The funniest joke in the world',
    'form-1-estimated_price': '10000',
}
TreasureFormSet = formset_factory(TreasureForm)
treasure_formset = TreasureFormSet(treasure_formset_data)
treasure_formset.is_bound # True


treasure_formset.is_valid()


treasure_formset = TreasureFormSet()

print(treasure_formset.management_form)


len(treasure_formset.forms) # outputs 5


treasure_formset_data = {
    'form-TOTAL_FORMS': '1',
    'form-INITIAL_FORMS': '0',
    'form-MIN_NUM_FORMS': '0',
    'form-MAX_NUM_FORMS': '1000',
    'form-0-name': 'An Irish shoebox',
    'form-0-estimated_price': '0',
}
TreasureFormSet = formset_factory(TreasureForm)
treasure_formset = TreasureFormSet(treasure_formset_data)
treasure_formset.is_bound # True
treasure_formset.is_valid() # True


treasure_formset.cleaned_data
# output: [{'name': 'An Irish shoebox', 'estimated_price': 0}]


treasure_formset_data = {
    'form-TOTAL_FORMS': '2',
    'form-INITIAL_FORMS': '0',
    'form-MIN_NUM_FORMS': '0',
    'form-MAX_NUM_FORMS': '1000',
    'form-0-name': 'An Irish shoebox',
    'form-0-estimated_price': '0',
    'form-1-name': 'The funniest joke in the world',
    'form-1-estimated_price': '10000',
}
TreasureFormSet = formset_factory(TreasureForm)
treasure_formset = TreasureFormSet(treasure_formset_data)
treasure_formset.is_valid()
treasure_formset.cleaned_data
# output: [{'name': 'An Irish shoebox', 'estimated_price': 0}, {'name': 'The funniest joke in the world', 'estimated_price': 10000}]


for form in treasure_formset:
    print(form.cleaned_data)
# {'name': 'An Irish shoebox', 'estimated_price': 0}
# {'name': 'The funniest joke in the world', 'estimated_price': 10000}


treasure_formset_initial_data = [
    {
    'name': 'Toyota AE86',
    'estimated_price': '3000',
    },
    {
    'name': 'Tofu',
    'estimated_price': '5',
    }
]
TreasureFormSet = formset_factory(TreasureForm, extra=1)
treasure_formset = TreasureFormSet(initial=treasure_formset_initial_data)
treasure_formset.initial
# output: [{'name': 'Toyota AE86', 'estimated_price': '3000'}, {'name': 'Tofu', 'estimated_price': '5'}]


print(treasure_formset.as_p())


treasure_formset_initial_data = [
    {
    'name': 'Toyota AE86',
    'estimated_price': '3000',
    },
    {
    'name': 'Tofu',
    'estimated_price': '5',
    }
]
treasure_formset_userdata = {
    'form-TOTAL_FORMS': '2',
    'form-INITIAL_FORMS': '2',
    'form-MIN_NUM_FORMS': '0',
    'form-MAX_NUM_FORMS': '1000',
    'form-0-name': 'Fiat Hatchback',
    'form-0-estimated_price': '100',
    'form-1-name': 'Pasta',
    'form-1-estimated_price': '2',
}
TreasureFormSet = formset_factory(TreasureForm, extra=0)
treasure_formset = TreasureFormSet(treasure_formset_userdata, initial=treasure_formset_initial_data)
treasure_formset.has_changed() # True
treasure_formset.is_valid() # True
treasure_formset.cleaned_data 
# output: [{'name': 'Fiat Hatchback', 'estimated_price': 100}, {'name': 'Pasta', 'estimated_price': 2}]
