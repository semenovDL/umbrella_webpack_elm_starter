module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.App as Html
import Html.Events exposing (onClick)


main : Program Never
main =
    Html.beginnerProgram { model = model, view = view, update = update }


type alias Model =
    Int


model : number
model =
    0


type Msg
    = NoOp
    | Increment


update : Msg -> Model -> Model
update msg model =
    case msg of
        NoOp ->
            model

        Increment ->
            model + 1


view : Model -> Html Msg
view model =
    div [ style [ ( "margin-top", "30px" ), ( "text-align", "center" ) ] ]
        [ div [] [ text "Hello world!" ]
        , button [ onClick Increment ]
            [ span [] [ text ("FTW " ++ toString model) ] ]
        ]
