from django.shortcuts import render
from django.http import HttpResponse
from django.forms import formset_factory

from .forms import TreasureForm


def treasureform_view(request):
    TreasureFormSet = formset_factory(TreasureForm, extra=1)
    treasure_formset = TreasureFormSet()
    initial_formset_data = [
        {
        'name': 'Rock',
        'estimated_price': 0,
         },
         {
         'name': 'Rock',
         'estimated_price': 0,
         },
    ]
    if request.method=="GET":
        treasure_formset = TreasureFormSet(initial=initial_formset_data)
    elif request.method=="POST":
        treasure_formset = TreasureFormSet(data=request.POST,
                                           initial=initial_formset_data)
        if treasure_formset.is_valid() and treasure_formset.has_changed():
            name0 = treasure_formset.cleaned_data[0]['name']
            estimated_price0 = treasure_formset.cleaned_data[0]['estimated_price']
            name1 = treasure_formset.cleaned_data[1]['name']
            estimated_price1 = treasure_formset.cleaned_data[1]['estimated_price']
            name2 = treasure_formset.cleaned_data[2]['name']
            estimated_price2 = treasure_formset.cleaned_data[2]['estimated_price']
            message = f'Thanks for your submission of {name0}, \
                        with an estimated price of {estimated_price0}! \
                        Thank you also for your submission of {name1}, \
                        with an estimated price of {estimated_price1}! \
                        And finally, thanks for your submission of {name2}, \
                        with an estimated price of {estimated_price2}!'
            return HttpResponse(message)
    context = {
        'treasure_formset': treasure_formset
    }
    return render(request, 'treasures/treasure_submit.html', context)
