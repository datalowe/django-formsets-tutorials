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
            message = ''
            for treasure_data in treasure_formset.cleaned_data:
                treasure_name = treasure_data['name']
                treasure_price = treasure_data['estimated_price']
                message += (
                    f'Thanks for submitting {treasure_name}, with an '
                    f'estimated price of {treasure_price}!\n'
                )
            return HttpResponse(message)
    context = {
        'treasure_formset': treasure_formset
    }
    return render(request, 'treasures/treasure_submit.html', context)
